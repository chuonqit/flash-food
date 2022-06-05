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
  imageView: string;
  isSubmit: boolean;
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
    this.productForm.patchValue({
      image: imageBase64,
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

  ngOnInit(): void {
    this.productId = this._activatedRoute.snapshot.params['id'];
    this.productService.getProduct(this.productId).subscribe(
      (data) => {
        this.getCategoriesByType();
        this.imageView = data.image;
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
          data.attributes.ice.length > 0 ||
          data.attributes.sugar.length > 0 ||
          data.attributes.size.length > 0 ||
          data.attributes.topping.length > 0
        ) {
          this.isAttribute = true;
        }
      },
      () => {
        this._router.navigate(['/admin', 'products']);
      }
    );
  }

  onSubmit() {
    if (!this.productForm.invalid) {
      this.isSubmit = true;
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
