import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusLabel',
  standalone: true
})

export class StatusLabelPipe implements PipeTransform {

  transform(status: string): string {
    switch (status) {
      case 'OPEN':
        return 'Offen';

      case 'IN_PROGRESS':
        return 'In Bearbeitung';

      case 'RESOLVED':
        return 'Gelöst';

      case 'CLOSED':
        return 'Geschlossen';

      default:
        return status;
    }
  }
}
