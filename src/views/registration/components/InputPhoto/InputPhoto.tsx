import { useState, useCallback, ChangeEvent } from 'react'
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
        setImage((prevObj) => ({ ...prevObj, size: { height, width } }))
      }
      reader.readAsDataURL(file)

      return file
    })
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': ['.jpeg', '.png']
    },
    onDrop,
    noClick: true,
    noKeyboard: true
  })
  const circleClassnames = classNames({
    'input-photo__circle': true,
    'input-photo__circle_chosen': image.src,
    'input-photo__circle_action_hover': isDragActive
  })

  const handleSetScale = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = Number(event.target.value);

    setScale(inputValue)
  }

  return (
    <div className="input-photo">
      <div {...getRootProps({ className: circleClassnames })}>
        <input {...getInputProps()} />
        {image.src && (
          <img
            src={image.src}
            className="input-photo__image"
            style={{ transform: `scale(${scale / 100})` }}
          />
        )}
        <div className="input-photo__circle-inner-text">
          DRAG&DROP <br />
          OR CLICK <br />
          .JPG .PNG .GIF
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
