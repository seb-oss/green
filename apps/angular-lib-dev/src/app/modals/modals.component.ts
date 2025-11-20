import { ChangeDetectionStrategy, Component } from '@angular/core'

import { ModalType } from '@sebgroup/extract'
import { DropdownOption } from '@sebgroup/green-angular'

@Component({
    selector: 'green-modal',
    templateUrl: './modals.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class ModalsComponent {
  public defaultModalIsOpen = false
  public defaultModalHeader = 'Default modal header'
  public defaultModalConfirmLabel = 'Confirm'
  public deafultModalDismissLabel = 'Dismiss'
  public defaultModalType: ModalType = 'default'

  public slideoutModalIsOpen = false

  public countries: DropdownOption[] = [
    {
      name: 'Sweden',
      value: 'sweden',
    },
    {
      name: 'Denmark',
      value: 'denmark',
    },
    {
      name: 'Finland',
      value: 'Finland',
    },
    {
      name: 'Norway',
      value: 'norway',
    },
    {
      name: 'England',
      value: 'england',
    },
    {
      name: 'Germany',
      value: 'germany',
    },
    {
      name: 'Estonia',
      value: 'estonia',
    },
    {
      name: 'Lithuania',
      value: 'lithuania',
    },
    {
      name: 'Belarus',
      value: 'belarus',
    },
    {
      name: 'Latvia',
      value: 'latvia',
    },
  ]
}
