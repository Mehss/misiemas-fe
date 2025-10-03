import {
  colors,
  height,
  fontSizes,
  fontWeight,
  lineHeight,
  buttonSize,
  textInputSize,
} from './theme'

export const TextTheme = {
  display1: {
    fontSize: fontSizes.medium * 4,
    lineHeight: lineHeight.large * 2.4,
    fontWeight: fontWeight.semiBold,
  },
  display2: {
    fontSize: fontSizes.xsmall * 3.4,
    lineHeight: lineHeight.small * 2,
    fontWeight: fontWeight.semiBold,
  },
  h1: {
    fontSize: fontSizes.medium * 2,
    lineHeight: lineHeight.xsmall * 3.2,
    fontWeight: fontWeight.bold,
  },
  h2: {
    fontSize: fontSizes.xsmall * 2,
    lineHeight: lineHeight.large,
    fontWeight: fontWeight.semiBold,
  },
  h3: {
    fontSize: fontSizes.xsmall * 2,
    lineHeight: lineHeight.small * 1.4,
    fontWeight: fontWeight.semiBold,
  },
  h4: {
    fontSize: fontSizes.xsmall * 1.8,
    lineHeight: lineHeight.small * 1.2,
    fontWeight: fontWeight.semiBold,
  },
  h5: {
    fontSize: fontSizes.large,
    lineHeight: lineHeight.small,
    fontWeight: fontWeight.semiBold,
  },
  h6: {
    fontSize: fontSizes.medium,
    lineHeight: lineHeight.small,
    fontWeight: fontWeight.semiBold,
  },
  body1: {
    fontSize: fontSizes.large,
    lineHeight: lineHeight.small,
    fontWeight: fontWeight.normal,
  },
  body2: {
    fontSize: fontSizes.medium,
    lineHeight: lineHeight.xsmall * 1.6,
    fontWeight: fontWeight.normal,
  },
  small: {
    fontSize: fontSizes.small,
    lineHeight: lineHeight.xsmall * 1.6,
    fontWeight: fontWeight.normal,
  },
  label: {
    fontSize: fontSizes.small,
    lineHeight: lineHeight.xsmall * 1.6,
    fontWeight: fontWeight.semiBold,
  },
  button1: {
    fontSize: fontSizes.medium,
    lineHeight: lineHeight.small,
    fontWeight: fontWeight.medium,
  },
  button2: {
    fontSize: fontSizes.large,
    lineHeight: lineHeight.small * 1.1,
    fontWeight: fontWeight.medium,
  },
}

export const ButtonTheme = {
  primary: {
    textColor: colors.neutral.n0,
    backgroundColor: colors.yellow.y75,
    size: {
      small: {
        size: buttonSize.small,
        font: fontSizes.small,
      },
      medium: {
        size: buttonSize.medium,
        font: fontSizes.medium,
      },
      large: {
        size: buttonSize.large,
        font: fontSizes.large,
      },
    },
    hover: {
      textColor: colors.neutral.n0,
      backgroundColor: colors.blues.b100,
    },
    active: {
      textColor: colors.neutral.n0,
      backgroundColor: colors.blues.b400,
    },
    selected: {
      textColor: colors.neutral.n0,
      backgroundColor: colors.neutral.n600,
    },
    disabled: {
      textColor: colors.neutral.n70,
      backgroundColor: colors.neutralAlpha.n20A,
    },
  },
  secondary: {
    textColor: colors.neutral.n600,
    backgroundColor: colors.neutralAlpha.n20A,
    size: {
      small: {
        size: buttonSize.small,
        font: fontSizes.small,
      },
      medium: {
        size: buttonSize.medium,
        font: fontSizes.medium,
      },
      large: {
        size: buttonSize.large,
        font: fontSizes.large,
      },
    },
    hover: {
      textColor: colors.neutral.n500,
      backgroundColor: colors.neutralAlpha.n30A,
    },
    active: {
      textColor: colors.blues.b400,
      backgroundColor: colors.blues.b75,
    },
    selected: {
      textColor: colors.neutral.n0,
      backgroundColor: colors.neutral.n600,
    },
    disabled: {
      textColor: colors.neutral.n70,
      backgroundColor: colors.neutralAlpha.n20A,
    },
  },
  tertiary: {
    textColor: colors.neutral.n600,
    borderColor: colors.neutral.n900,
    backgroundColor: colors.neutral.n0,
    size: {
      small: {
        size: buttonSize.small,
        font: fontSizes.small,
      },
      medium: {
        size: buttonSize.medium,
        font: fontSizes.medium,
      },
      large: {
        size: buttonSize.large,
        font: fontSizes.large,
      },
    },
    hover: {
      textColor: colors.neutral.n500,
      borderColor: colors.neutral.n50,
      backgroundColor: colors.neutralAlpha.n30A,
    },
    active: {
      textColor: colors.blues.b400,
      borderColor: colors.blues.b300,
      backgroundColor: colors.blues.b75,
    },
    selected: {
      textColor: colors.neutral.n0,
      borderColor: colors.neutral.n300,
      backgroundColor: colors.neutral.n600,
    },
    disabled: {
      textColor: colors.neutral.n70,
      borderColor: colors.neutral.n50,
      backgroundColor: colors.neutralAlpha.n20A,
    },
  },
  subtle: {
    textColor: colors.neutral.n600,
    backgroundColor: colors.neutral.n0,
    size: {
      small: {
        size: buttonSize.small,
        font: fontSizes.small,
      },
      medium: {
        size: buttonSize.medium,
        font: fontSizes.medium,
      },
      large: {
        size: buttonSize.large,
        font: fontSizes.large,
      },
    },
    hover: {
      textColor: colors.neutral.n500,
      backgroundColor: colors.neutralAlpha.n30A,
    },
    active: {
      textColor: colors.blues.b400,
      backgroundColor: colors.blues.b75,
    },
    selected: {
      textColor: colors.neutral.n0,
      backgroundColor: colors.neutral.n600,
    },
    disabled: {
      textColor: colors.neutral.n70,
      backgroundColor: colors.neutralAlpha.n20A,
    },
  },
  link: {
    textColor: colors.blues.b400,
    backgroundColor: colors.neutral.n0,
    size: {
      small: {
        size: buttonSize.small,
        font: fontSizes.small,
      },
      medium: {
        size: buttonSize.medium,
        font: fontSizes.medium,
      },
      large: {
        size: buttonSize.large,
        font: fontSizes.large,
      },
    },
    hover: {
      textColor: colors.blues.b300,
      backgroundColor: colors.neutral.n0,
    },
    active: {
      textColor: colors.blues.b500,
      backgroundColor: colors.neutral.n0,
    },
    selected: {
      textColor: colors.neutral.n0,
      backgroundColor: colors.neutral.n600,
    },
    disabled: {
      textColor: colors.neutral.n70,
      backgroundColor: colors.neutralAlpha.n20A,
    },
  },
  icon: {
    textColor: colors.neutral.n0,
    backgroundColor: colors.blues.b300,
    size: {
      small: {
        size: buttonSize.small,
        font: fontSizes.small,
      },
      medium: {
        size: buttonSize.medium,
        font: fontSizes.medium,
      },
      large: {
        size: buttonSize.large,
        font: fontSizes.large,
      },
    },
    hover: {
      textColor: colors.neutral.n0,
      backgroundColor: colors.blues.b100,
    },
    active: {
      textColor: colors.neutral.n0,
      backgroundColor: colors.blues.b400,
    },
    selected: {
      textColor: colors.neutral.n0,
      backgroundColor: colors.blues.b300,
    },
    disabled: {
      textColor: colors.neutral.n0,
      backgroundColor: colors.blues.b300,
    },
  },
  danger: {
    textColor: colors.neutral.n0,
    backgroundColor: colors.reds.r400,
    size: {
      small: {
        size: buttonSize.small,
        font: fontSizes.small,
      },
      medium: {
        size: buttonSize.medium,
        font: fontSizes.medium,
      },
      large: {
        size: buttonSize.large,
        font: fontSizes.large,
      },
    },
    hover: {
      textColor: colors.neutral.n0,
      backgroundColor: colors.reds.r300,
    },
    active: {
      textColor: colors.neutral.n0,
      backgroundColor: colors.reds.r500,
    },
    selected: {
      textColor: colors.neutral.n0,
      backgroundColor: colors.reds.r500,
    },
    disabled: {
      textColor: colors.neutral.n70,
      backgroundColor: colors.neutralAlpha.n20A,
    },
  },
}

export const InputTheme = {
  none: {
    textColor: colors.neutral.n800,
    borderColor: colors.neutral.n40,
    backgroundColor: colors.neutral.n10,
    placeholderColor: colors.neutral.n100,
    size: {
      medium: {
        size: textInputSize.medium,
        font: fontSizes.medium,
      },
      large: {
        size: textInputSize.large,
        font: fontSizes.medium,
      },
    },
    hover: {
      textColor: colors.neutral.n800,
      borderColor: colors.neutral.n40,
      backgroundColor: colors.neutral.n30,
      placeholderColor: colors.neutral.n100,
    },
    focused: {
      textColor: colors.neutral.n800,
      borderColor: colors.blues.b300,
      backgroundColor: colors.neutral.n0,
      placeholderColor: colors.neutral.n100,
    },
    disabled: {
      textColor: colors.neutral.n70,
      backgroundColor: colors.neutral.n10,
      placeholderColor: colors.neutral.n70,
    },
    required: {
      borderColor: colors.reds.r400,
    },
  },
  suffix: {
    textColor: colors.neutral.n800,
    borderColor: colors.neutral.n40,
    backgroundColor: colors.neutral.n10,
    placeholderColor: colors.neutral.n100,
    size: {
      medium: {
        size: textInputSize.medium,
        font: fontSizes.medium,
      },
      large: {
        size: textInputSize.large,
        font: fontSizes.medium,
      },
    },
    hover: {
      textColor: colors.neutral.n800,
      borderColor: colors.neutral.n40,
      backgroundColor: colors.neutral.n30,
      placeholderColor: colors.neutral.n100,
    },
    focused: {
      textColor: colors.neutral.n800,
      borderColor: colors.blues.b300,
      backgroundColor: colors.neutral.n0,
      placeholderColor: colors.neutral.n100,
    },
    disabled: {
      textColor: colors.neutral.n70,
      backgroundColor: colors.neutral.n10,
      placeholderColor: colors.neutral.n70,
    },
    required: {
      borderColor: colors.reds.r400,
    },
  },
  preffix: {
    textColor: colors.neutral.n800,
    borderColor: colors.neutral.n40,
    backgroundColor: colors.neutral.n10,
    placeholderColor: colors.neutral.n100,
    size: {
      medium: {
        size: textInputSize.medium,
        font: fontSizes.medium,
      },
      large: {
        size: textInputSize.large,
        font: fontSizes.medium,
      },
    },
    hover: {
      textColor: colors.neutral.n800,
      borderColor: colors.neutral.n40,
      backgroundColor: colors.neutral.n30,
      placeholderColor: colors.neutral.n100,
    },
    focused: {
      textColor: colors.neutral.n800,
      borderColor: colors.blues.b300,
      backgroundColor: colors.neutral.n0,
      placeholderColor: colors.neutral.n100,
    },
    disabled: {
      textColor: colors.neutral.n70,
      backgroundColor: colors.neutral.n10,
      placeholderColor: colors.neutral.n70,
    },
    required: {
      borderColor: colors.reds.r400,
    },
  },
}

export const AutoCompleteTheme = {
  size: {
    default: {
      height: height.small,
      contentHeight: height.xsmall * 1.2,
    },
    compact: {
      height: height.xsmall * 2,
      contentHeight: height.xsmall,
    },
  },
  subtle: {
    textColor: colors.neutral.n100,
    backgroundColor: 'transparent',
    hover: {
      textColor: colors.neutral.n100,
      backgroundColor: colors.neutral.n20,
    },
    focus: {
      textColor: colors.neutral.n100,
      backgroundColor: colors.neutral.n20,
    },
    disable: {
      textColor: colors.neutral.n70,
      backgroundColor: colors.neutral.n20,
    },
  },
  normal: {
    textColor: colors.neutral.n100,
    backgroundColor: colors.neutral.n20,
    hover: {
      textColor: colors.neutral.n100,
      backgroundColor: colors.neutral.n30,
    },
    focus: {
      textColor: colors.neutral.n100,
      backgroundColor: colors.neutral.n0,
    },
    disable: {
      textColor: colors.neutral.n70,
      backgroundColor: colors.neutral.n20,
    },
  },
}
