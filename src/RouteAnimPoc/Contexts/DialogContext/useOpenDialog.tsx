import { useDialog, Direction } from "./DialogContext";
import { useHistory } from "react-router-dom";
import { Component } from "./DialogContext";
interface Options {
    direction?: Direction;
    component?: Component;
}

const useOpdenDialog = () => {
    const { dispatch } = useDialog();
    const history = useHistory();

    return (options?: Options) => {
        history.push(`?overlay=${options?.component || 'help'}`);
        dispatch({ type: "show", direction: options?.direction ? options.direction : 'left', component: options?.component || 'help' });
    }
};

export default useOpdenDialog;
