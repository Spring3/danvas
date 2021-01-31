import React, { createContext, useState, useCallback, useContext } from 'react';
import { ImagePreviewContainer, ImagePreview } from '../components/common/ImagePreview';

const ImagePreviewContext = createContext();

const usePreviewApi = () => {
  const [imagesToPreview, setImagesToPreview] = useState([]);
  const [isPreviewShown, showPreview] = useState(false);

  const showImagePreview = useCallback((images) => {
    if (!images) {
      setImagesToPreview([]);
    } else {
      setImagesToPreview(Array.isArray(images) ? images : [images]);
    }
    showPreview(true);
  }, []);

  const hideImagePreview = useCallback(() => {
    setImagesToPreview([]);
    showPreview(false);
  }, []);

  return {
    isPreviewShown,
    imagesToPreview,
    showImagePreview,
    hideImagePreview
  };
};

const ImagePreviewContextProvider = ({ children }) => {
  const { imagesToPreview, ...api } = usePreviewApi();

  return (
    <ImagePreviewContext.Provider value={api}>
      { api.isPreviewShown ? <ImagePreviewContainer /> : null }
      <ImagePreview images={imagesToPreview} onClose={api.hideImagePreview} />
      {children}
    </ImagePreviewContext.Provider>
  );
};

const useImagePreview = () => useContext(ImagePreviewContext);

export {
  ImagePreviewContextProvider,
  useImagePreview
};
