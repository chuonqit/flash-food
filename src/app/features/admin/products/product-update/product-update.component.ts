import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AttributeElement } from 'src/app/shared/models/Attribute.model';
import { CategoryElement } from 'src/app/shared/models/Category.model';
import { CategoryService } from 'src/app/shared/services/category.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss'],
})
export class ProductUpdateComponent implements OnInit {
  productId: string;
  productForm: FormGroup;
  isAttribute: boolean;
  categories: CategoryElement[];
  attributes: AttributeElement[];
  constructor(
    private _activatedRoute: ActivatedRoute,
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
    this.productId = '';
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

  ngOnInit(): void {
    this.productId = this._activatedRoute.snapshot.params['id'];
    this.productService.getProduct(this.productId).subscribe((data) => {
      this.getCategoriesByType();
      this.productForm.patchValue({
        name: data.name,
        image: data.image,
        price: data.price,
        newPrice: data.newPrice,
        description: data.description,
        type: data.type,
        category: data.category,
        attributes: {
          ice: data.attributes.ice,
          sugar: data.attributes.sugar,
          size: data.attributes.size,
          topping: data.attributes.topping,
        },
      });

      if (
        data.attributes.ice ||
        data.attributes.sugar ||
        data.attributes.size ||
        data.attributes.topping
      ) {
        this.isAttribute = true;
      }
    });
  }

  onSubmit() {
    if (!this.productForm.invalid) {
      this.productService
        .updateProducts({
          _id: this.productId,
          ...this.productForm.value,
        })
        .subscribe(() => {
          this._snackBar.open('Cập nhật thành công', '', {
            duration: 5000,
          });
          this._router.navigate(['/admin', 'products']);
        });
    }
  }
}
