import { useMemo } from "react";
import styles from './Button.module.scss';

const Button = ({ type, label, styles, action, disabled, textClass, callOnEnter  }) => {
  const wrapperClass = useMemo(() => {
    switch (type) {
      case 'default':
        return styles.wrapperDefault;
      case 'white':
        return styles.wrapperWhite;
      case 'white-outline':
        return styles.wrapperWhiteOutline;
      case 'secondary':
        return styles.wrapperSecondary;
      case 'third-outline':
        return styles.wrapperThirdOutline;
      case 'danger':
        return styles.wrapperDanger;
      case 'disabled':
        return styles.disabled;
      case 'subsBtn':
        return styles.subsBtn;
      case 'rebrand':
        return styles['rebrand-btn'];
      default:
        return styles.wrapperDefault;
    }
  }, [type]);

  useEffect(() => {
    const listener = (event) => {
      if (event.code === 'Enter' && !disabled && callOnEnter) {
        event.preventDefault();
        action();
      }
    };
    document.addEventListener('keydown', listener);
    return () => {
      document.removeEventListener('keydown', listener);
    };
  }, [disabled, callOnEnter, action]);

  return (
    <div className="rounded-md shadow">
      <a
        href="#"
        className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
      >
        Button
      </a>
    </div>
  );
};

export default memo(Button);
