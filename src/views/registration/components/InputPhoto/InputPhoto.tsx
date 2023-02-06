import { useState, useCallback, ChangeEvent } from 'react'
import { useDropzone } from 'react-dropzone'
import classNames from 'classnames'

import './InputPhoto.scss'
import files from '@/assets/img/files.svg'

const MIN_INPUT_VALUE = 100
const MAX_INPUT_VALUE = 500

function InputPhoto() {
  const [image, setImage] = useState('')
  const [scale, setScale] = useState(MIN_INPUT_VALUE)
  const [isHoverActive, setIsHoverActive] = useState(false)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.map((file: Blob) => {
      const reader = new FileReader()

      reader.onload = function () {
        if (typeof reader.result !== 'string') return

        setImage(reader.result)
      }
      reader.readAsDataURL(file)

      return file
    })
  }, [])
  const { getRootProps, getInputProps, fileRejections, isDragActive } = useDropzone({
    accept: {
      'image/png': [],
      'image/jpeg': [],
      'image/gif': []
    },
    onDrop,
    noKeyboard: true,
    maxSize: 1e6,
    multiple: false
  })
  const circleClassnames = classNames({
    'input-photo__circle': true,
    'input-photo__circle_chosen': image,
    'input-photo__circle_rejected': fileRejections.length > 0
  })

  const formatRejectionMessage = (message: string) => {
    return message.replaceAll(/image\//g, '.').replaceAll(/,/g, ', ')
  }

  const circleText = () => {
    if (fileRejections[0]?.errors[0]?.message === undefined) {
      return (
        <>
          DRAG&DROP <br />
          OR CLICK <br />
          .JPG .PNG .GIF
        </>
      )
    }
    return formatRejectionMessage(fileRejections[0].errors[0].message)
  }

  const handleSetScale = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = Number(event.target.value)

    setScale(inputValue)
  }

  const hasError = () => {
    return image === '' || fileRejections.length > 0
  }

  return (
    <div className="input-photo">
      <div
        {...getRootProps({
          className: circleClassnames,
          onPointerEnter: () => setIsHoverActive(true),
          onPointerLeave: () => setIsHoverActive(false)
        })}
      >
        <input {...getInputProps()} />
        {!hasError() && (
          <img
            src={image}
            className="input-photo__image"
            style={{ transform: `scale(${scale / 100})` }}
          />
        )}
        <div className="input-photo__circle-inner-text">
          {isHoverActive || isDragActive ? <img src={files} alt="files" /> : circleText()}
        </div>
      </div>
      <input
        type="range"
        min={MIN_INPUT_VALUE}
        max={MAX_INPUT_VALUE}
        value={scale}
        onChange={handleSetScale}
        disabled={hasError()}
        className="input-photo__range-slider"
      />
    </div>
  )
}

export default InputPhoto
