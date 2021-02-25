import React, { createContext, useState, useCallback, useContext } from 'react';
import {
  ImagePreviewContainer,
  ImagePreview,
} from '../components/common/ImagePreview';

const ImagePreviewContext = createContext();

const usePreviewApi = () => {
  const [imagesToPreview, setImagesToPreview] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [isPreviewShown, showPreview] = useState(false);

  const showImagePreview = useCallback((images, startFrom = 0) => {
    if (!images || !images.length) {
      return;
    }

    setImagesToPreview(Array.isArray(images) ? images : [images]);
    setStartIndex(startFrom);
    showPreview(true);
  }, []);

  const hideImagePreview = useCallback(() => {
    setImagesToPreview([]);
    setStartIndex(0);
    showPreview(false);
  }, []);

  return {
    startIndex,
    isPreviewShown,
    imagesToPreview,
    showImagePreview,
    hideImagePreview,
  };
};

const ImagePreviewContextProvider = ({ children }) => {
  const { imagesToPreview, startIndex, ...api } = usePreviewApi();

  return (
    <ImagePreviewContext.Provider value={api}>
      {api.isPreviewShown ? <ImagePreviewContainer /> : null}
      <ImagePreview
        images={imagesToPreview}
        startIndex={startIndex}
        onClose={api.hideImagePreview}
      />
      {children}
    </ImagePreviewContext.Provider>
  );
};

const useImagePreview = () => useContext(ImagePreviewContext);

export { ImagePreviewContextProvider, useImagePreview };
