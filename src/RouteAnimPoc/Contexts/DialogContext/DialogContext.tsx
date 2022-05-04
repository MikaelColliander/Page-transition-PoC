import * as React from 'react'

export type DialogProviderProps = {children: React.ReactNode};
export type Direction = 'up' | 'down' | 'right' | 'left';
export type Component = 'help' | 'login'
export type Action = {type: 'show' | 'hide'; direction: Direction; component: Component;};
export type Dispatch = (action: Action) => void;
export type State = {displayDialog: boolean; direction: Direction; component: Component;};

export const DialogStateContext = React.createContext<
  {state: State; dispatch: Dispatch} | undefined
>(undefined);

export default DialogStateContext;

function dialogReducer(state: State, action: Action) {
  switch (action.type) {
    case 'show': {
      return {displayDialog: true, direction: action.direction, component: action.component}
    }
    case 'hide': {
      return {displayDialog: false, direction: action.direction, component: action.component}
    }
    default: {
      throw new Error(`Unhandled action type: ${action}`)
    }
  }
}

function DialogProvider({children}: DialogProviderProps) {
  const [state, dispatch] = React.useReducer(dialogReducer, {displayDialog: false, direction: 'left', component: 'help'})
  const value = {state, dispatch}
  return (
    <DialogStateContext.Provider value={value}>
      {children}
    </DialogStateContext.Provider>
  )
}

function useDialog() {
  const context = React.useContext(DialogStateContext)
  if (context === undefined) {
    throw new Error('useDialog must be used within a DialogProvider')
  }
  return context
}

export {DialogProvider, useDialog}