// Third party dependencies.
import { StyleSheet } from 'react-native';

// External dependencies.
import { Theme } from '../../../../util/theme/models';

/**
 * Style sheet function for AccountConnectSingle screen.
 * @returns StyleSheet object.
 */
const styleSheet = (params: { theme: Theme }) => {
  const { colors } = params.theme;

  return StyleSheet.create({
    body: {
      paddingHorizontal: 16,
    },
    description: {
      textAlign: 'center',
      marginVertical: 16,
      color: colors.text.alternative,
    },
    sheetActionContainer: {
      marginTop: 16,
    },
    ctaButtonsContainer: {
      marginTop: 24,
      flexDirection: 'row',
      marginBottom: 16,
    },
    button: { flex: 1 },
    sdkInfoContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      paddingHorizontal: 16,
      marginBottom: -16,
    },
    sdkInfoDivier: {
      borderTopWidth: 1,
      borderTopColor: colors.border.muted,
      height: 1,
      width: '100%',
    },
    buttonSeparator: {
      width: 16,
    },
    downCaretContainer: { justifyContent: 'center', flex: 1 },
    disabled: {
      opacity: 0.5,
    },
  });
};

export default styleSheet;
