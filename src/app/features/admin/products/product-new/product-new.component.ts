import { AttributeElement } from './../../../../shared/models/Attribute.model';
import { ProductService } from 'src/app/shared/services/product.service';
import { CategoryElement } from 'src/app/shared/models/Category.model';
import { CategoryService } from './../../../../shared/services/category.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.scss'],
})
export class ProductNewComponent implements OnInit {
  productForm: FormGroup;
  isAttribute: boolean;
  categories: CategoryElement[];
  attributes: AttributeElement[];
  constructor(
    private _snackBar: MatSnackBar,
    private _router: Router,
    private categoryService: CategoryService,
    private productService: ProductService
  ) {
    this.isAttribute = false;
    this.productForm = new FormGroup({
      name: new FormControl('', []),
      image: new FormControl('', []),
      price: new FormControl(0, []),
      newPrice: new FormControl(0, []),
      description: new FormControl('', []),
      type: new FormControl('', []),
      category: new FormControl('', []),
      attributes: new FormGroup({
        ice: new FormControl([], []),
        size: new FormControl([], []),
        sugar: new FormControl([], []),
        topping: new FormControl([], []),
      }),
    });
    this.categories = [];
    this.attributes = [];
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
    this.productForm.patchValue({
      image: JSON.stringify({
        base64: imageBase64,
      }),
    });
  }

  getCategoriesByType() {
    this.productForm.get('type')?.valueChanges.subscribe((value) => {
      this.categoryService
        .getProductsCategoriesType(value)
        .subscribe((response) => {
          this.categories = response;
        });

      this.productService.getAttributeType(value).subscribe((data) => {
        this.attributes = data;
      });
    });
  }

  clearForm() {
    this.productForm.reset();
  }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.productForm.invalid) {
      this.productService
        .createProducts(this.productForm.value)
        .subscribe(() => {
          this._snackBar.open('Thêm thành công', '', {
            duration: 5000,
          });
          this._router.navigate(['/admin', 'products']);
        });
    }
  }
}
