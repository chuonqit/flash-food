import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.scss'],
})
export class CategoryUpdateComponent implements OnInit {
  categoryId: string;
  categoryForm: FormGroup;
  imageView: string;
  isSubmit: boolean;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private _router: Router,
    private categoryService: CategoryService
  ) {
    this.categoryForm = new FormGroup({
      name: new FormControl('', []),
      image: new FormControl('', []),
      type: new FormControl('', []),
    });
    this.categoryId = '';
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

  ngOnInit(): void {
    this.categoryId = this._activatedRoute.snapshot.params['id'];
    this.categoryService.getCategory(this.categoryId).subscribe(
      (data) => {
        this.imageView = data.image;
        this.categoryForm.patchValue({
          name: data.name,
          image: data.image,
          type: data.type,
        });
      },
      () => {
        this._router.navigate(['/admin', 'categories']);
      }
    );
  }

  onSubmit() {
    if (!this.categoryForm.invalid) {
      this.isSubmit = true;
      this.categoryService
        .updateCategory({
          _id: this.categoryId,
          ...this.categoryForm.value,
        })
        .subscribe(() => {
          this._snackBar.open('Cập nhật thành công', '', {
            duration: 5000,
          });
          this._router.navigate(['/admin', 'categories']);
        });
    }
  }
}
