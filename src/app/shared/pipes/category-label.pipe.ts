import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryLabel',
  standalone: true
})
export class CategoryLabelPipe implements PipeTransform {

  transform(category: string): string {
    switch (category) {
      case 'HARDWARE':
        return 'Hardware';

      case 'SOFTWARE':
        return 'Software';

      case 'NETWORK':
        return 'Netzwerk';

      case 'USER_ACCOUNT':
        return 'Benutzerkonto';

      case 'OTHER':
        return 'Sonstiges';

      default:
        return category;
    }
  }
}
