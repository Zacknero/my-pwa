import {Component, Inject} from '@angular/core';
import {ShareService} from '@ngx-share/core';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from '@angular/material';

@Component({
  selector: 'app-social-shared',
  templateUrl: './social-shared.component.html',
  styleUrls: ['./social-shared.component.scss']
})
export class SocialSharedComponent {

  linkToShare: any;

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any, private bottomSheetRef: MatBottomSheetRef<SocialSharedComponent>,
              public share: ShareService) {
    this.linkToShare = this.data.url;
  }

  sharedLink(event: MouseEvent) {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

}
