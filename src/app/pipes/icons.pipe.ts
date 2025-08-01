import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'icons',
  standalone: true
})
export class IconsPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    switch(value){
      case 'silent':
        return 'volume_off';
      case 'remote':
        return 'settings_remote';
      case 'led':
        return 'lightbulb';
      case 'movable':
        return 'directions_walk';
      case 'eco':
        return 'eco';
      case '360':
        return '360';
      case 'schedule':
        return 'schedule';
      case 'high-performance':
        return 'flash_on';
      case 'wifi':
        return 'wifi';
      case 'carryable':
        return 'portable_wifi_off';
      case 'usb':
        return 'usb';
      case 'green':
        return 'nature';
      case 'water':
        return 'water_drop';
      case 'industrial':
        return 'precision_manufacturing';
      case 'power':
        return 'air';
      case 'solid':
        return 'shield';
      case 'wall':
        return 'vertical_align_center';
      case 'speed':
        return 'speed';
      case 'oscillating':
        return 'rotate_right';
      case 'cart':
        return 'add_shopping_cart';
      default:
        return '';
    }
  }

}
