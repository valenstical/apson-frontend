declare var window;

const defaultFunc = params => {};
const styles = {
  palette: {
    window: '#FFFFFF',
    sourceBg: '#FBFBFB',
    windowBorder: '#00b09b',
    tabIcon: '#000000',
    inactiveTabIcon: '#0D2F5A',
    menuIcons: '#555a5f',
    link: '#00b09b',
    action: '#339933',
    inProgress: '#0433ff',
    complete: '#339933',
    error: '#cc0000',
    textDark: '#000000',
    textLight: '#FFFFFF',
  },
};

export class CloudinaryWidget {
  widget: any;
  constructor(
    handleSuccess = defaultFunc,
    handleFailure = defaultFunc,
    ratio = 1,
    preset = 'profile',
    cropping = true,
  ) {
    this.widget = window.cloudinary.createUploadWidget(
      {
        cloudName: 'dvnrltpfi',
        uploadPreset: preset,
        cropping,
        croppingAspectRatio: ratio,
        croppingDefaultSelectionRatio: 0.8,
        resourceType: 'image',
        clientAllowedFormats: ['png', 'jpg', 'jpeg', 'gif'],
        maxImageWidth: 500,
        maxImageHeight: 500,
        multiple: false,
        styles,
        buttonClass: 'd-none',
        sources: ['local', 'camera'],
      },
      (error, result: any) => {
        if (!error && result && result.event === 'success') {
          return handleSuccess(result.info.secure_url);
        }
        handleFailure(error);
      },
    );
  }
  open() {
    this.widget.open();
  }
}

export default {};
