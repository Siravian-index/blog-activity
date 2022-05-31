export type commentType = {
  comment: string
  author: string
}

export type blogType = {
  id: string | number
  title: string
  content: string
  comments: commentType[]
}

export type stateType = {
  logged: boolean
  blogs: blogType[]
}

export enum actionsEnum {
  TOGGLE_LOG = 'TOGGLE_LOG',
  ADD_POST = 'ADD_POST',
  DELETE_POST = 'DELETE_POST',
  ADD_COMMENT = 'ADD_COMMENT',
  DELETE_COMMENT = 'DELETE_COMMENT',
}

export type actionType = {
  type: actionsEnum
  payload: any
}

export const reducer = (state: stateType, action: actionType): stateType => {
  switch (action.type) {
    case actionsEnum.TOGGLE_LOG:
      return state
    case actionsEnum.ADD_POST:
      return state
    case actionsEnum.DELETE_POST:
      return state
    case actionsEnum.ADD_COMMENT:
      return state
    case actionsEnum.DELETE_COMMENT:
      return state
    default:
      throw new Error('Any of the actions in the state manager were matched')
  }
}
