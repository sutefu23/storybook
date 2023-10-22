import type { Status } from './Game'

export type Props = {
  status: Status
}
export const StatusBar = ({ status }: Props) => <div className="status">{status}</div>
