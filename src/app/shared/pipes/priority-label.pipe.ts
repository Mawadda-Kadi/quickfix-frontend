import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priorityLabel',
  standalone: true
})
export class PriorityLabelPipe implements PipeTransform {

  transform(priority: string): string {
    switch (priority) {
      case 'LOW':
        return 'Niedrig';

      case 'MEDIUM':
        return 'Mittel';

      case 'HIGH':
        return 'Hoch';

      case 'CRITICAL':
        return 'Kritisch';

      default:
        return priority;
    }
  }
}
