import { useState, useCallback, ChangeEvent, useRef } from 'react'
import { useDropzone } from 'react-dropzone'
import classNames from 'classnames'

import './InputPhoto.scss'

interface Image {
  src: string
  size?: {
    width: number
    height: number
  }
}

const MIN_INPUT_VALUE = 100
const MAX_INPUT_VALUE = 500

function InputPhoto() {
  const [image, setImage] = useState<Image>({ src: '' })
  const [scale, setScale] = useState(MIN_INPUT_VALUE)
  const inputRef = useRef(null)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.map((file: Blob) => {
      const reader = new FileReader()
      const imageObj = new Image()

      reader.onload = function () {
        if (typeof reader.result !== 'string') return

        imageObj.src = reader.result

        setImage({ src: reader.result })
      }
      imageObj.onload = () => {
        const { width, height } = imageObj
        console.log(imageObj.sizes)
        setImage((prevObj) => ({ ...prevObj, size: { height, width } }))
      }
      reader.readAsDataURL(file)

      return file
    })
  }, [])
  const { getRootProps, getInputProps, isDragActive, isDragReject, fileRejections } = useDropzone({
    accept: {
      'image/png': [],
      'image/jpeg': [],
      'image/gif': []
    },
    onDrop,
    noKeyboard: true,
    maxSize: 1e+6,
    multiple: false
  })
  const circleClassnames = classNames({
    'input-photo__circle': true,
    'input-photo__circle_chosen': image.src,
    'input-photo__circle_action_hover': isDragActive,
    'input-photo__circle_rejected': fileRejections.length > 0
  })

  const formatRejectionMessage = (message: string) => {
    return message.replaceAll(/image\//g, '.').replaceAll(/,/g, ', ')
  }

  const circleText = () => {
    if (fileRejections[0]?.errors[0]?.message === undefined) {
      return (<>
        DRAG&DROP <br />
        OR CLICK <br />
        .JPG .PNG .GIF
      </>)
    }
    return formatRejectionMessage(fileRejections[0].errors[0].message)
  };

  const handleSetScale = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = Number(event.target.value)

    setScale(inputValue)
  }
  console.log(circleText())
  return (
    <div className="input-photo">
      <div {...getRootProps({ className: circleClassnames })}>
        <input {...getInputProps()} ref={inputRef}/>
        {image.src && (
          <img
            src={image.src}
            className="input-photo__image"
            style={{ transform: `scale(${scale / 100})` }}
          />
        )}
        <div className="input-photo__circle-inner-text">
          { circleText() }
        </div>
      </div>
      <input
        type="range"
        min={MIN_INPUT_VALUE}
        max={MAX_INPUT_VALUE}
        value={scale}
        onChange={handleSetScale}
        className="input-photo__range-slider"
      />
    </div>
  )
}

export default InputPhoto
