import { AttributeElement } from './../../../../shared/models/Attribute.model';
import { ProductService } from 'src/app/shared/services/product.service';
import { CategoryElement } from 'src/app/shared/models/Category.model';
import { CategoryService } from './../../../../shared/services/category.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-category-new',
  templateUrl: './category-new.component.html',
  styleUrls: ['./category-new.component.scss'],
})
export class CategoryNewComponent implements OnInit {
  categoryForm: FormGroup;
  imageView: string;
  isSubmit: boolean;
  constructor(
    private _snackBar: MatSnackBar,
    private _router: Router,
    private categoryService: CategoryService
  ) {
    this.categoryForm = new FormGroup({
      name: new FormControl('', []),
      image: new FormControl('', []),
      type: new FormControl('', []),
    });
    this.imageView = '';
    this.isSubmit = false;
  }

  getBase64(event: any) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  async handleChangeImage(event: any) {
    const imageBase64: any = await this.getBase64(event);
    this.imageView = imageBase64;
    this.categoryForm.patchValue({
      image: imageBase64,
    });
  }

  clearForm() {
    this.categoryForm.reset();
  }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.categoryForm.invalid) {
      this.isSubmit = true;
      this.categoryService
        .addCategory(this.categoryForm.value)
        .subscribe(() => {
          this._snackBar.open('Thêm thành công', '', {
            duration: 5000,
          });
          this._router.navigate(['/admin', 'categories']);
        });
    }
  }
}
