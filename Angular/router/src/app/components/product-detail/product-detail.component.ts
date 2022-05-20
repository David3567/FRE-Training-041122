import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product, ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product!: Product | undefined;
  id!: string | null;
  sub = new Subscription();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.sub = this.activatedRoute.paramMap.subscribe((params) => {
      console.log(params);

      this.id = params.get('producId');

      let products = this.productService.getProducts();
      if (this.id)
        this.product = products.find(
          (p) => this.id && +p.productID === +this.id
        );
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onBack(): void {
    this.router.navigate(['product']);
  }
}
