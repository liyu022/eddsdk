/**
 * @Author : Yu Li
 */

import { ViewerEventType } from '../EventType'
import Event from '../Event'

class ViewerEvent extends Event {
  constructor() {
    super(ViewerEventType)
    this._registerEvent()
  }
}

export default ViewerEvent
