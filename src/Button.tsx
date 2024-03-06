import {ProgressBar, Button as RACButton, ButtonProps as RACButtonProps} from 'react-aria-components';
import './Button.css';
import { useLocalizedString } from './intl/src';

interface ButtonProps extends RACButtonProps {
    isPending?: boolean;
}

export function Button({children, isPending, ...rest}: ButtonProps) {
    const stringFormatter = useLocalizedString();

    return (
        <RACButton {...rest} data-pending={isPending}>
        {(buttonProps) => {
            return (
                <>
                <span className="content">{typeof children === "function" ? children(buttonProps) : children}</span>
                {isPending && (
                    <ProgressBar
                    aria-label={stringFormatter.format("button.pending")}
                    isIndeterminate
                    >
                    <div className="spinner__track"></div>
                    <div className="spinner__fill"></div>
                    </ProgressBar>
                    )}
                    </>
                    )
                }}
                </RACButton>
                );
            }
