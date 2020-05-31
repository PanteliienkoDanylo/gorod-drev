import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-products-editor-dialog',
  templateUrl: './products-editor-dialog.html',
  styleUrls: ['./products-editor-dialog.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsEditorDialog implements OnInit {

  public formGroup: FormGroup;
  public idFormControl: FormControl;
  public nameFormControl: FormControl;
  public salePriceFormControl: FormControl;
  public masterPriceFormControl: FormControl;
  public masterIdFormControl: FormControl;

  public constructor(public dialogRef: MatDialogRef<ProductsEditorDialog>,
                     @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  public ngOnInit(): void {
    this.initFormControls();
    this.initFormGroup();
  }

  private initFormControls(): void {
    this.idFormControl = new FormControl(this.data.product.id, Validators.required);
    this.nameFormControl = new FormControl(this.data.product.name);
    this.salePriceFormControl = new FormControl(this.data.product.salePrice);
    this.masterPriceFormControl = new FormControl(this.data.product.masterPrice);
    this.masterIdFormControl = new FormControl(this.data.product.master);
  }

  private initFormGroup(): void {
    this.formGroup = new FormGroup({
      id: this.idFormControl,
      name: this.nameFormControl,
      salePrice: this.salePriceFormControl,
      masterPrice: this.masterPriceFormControl,
      master: this.masterIdFormControl
    });
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }

}
