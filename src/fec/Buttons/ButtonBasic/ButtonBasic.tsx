import { PropsWithOnlyChildren } from '../../utils/commonTypes'

export const ButtonBasic = ({ children }: PropsWithOnlyChildren) => {
  return <button type="button">{children}</button>
}
