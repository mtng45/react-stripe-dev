# Orders API
Orders APIを使用して、Stripeを通じて商品を販売および整理します。

---

実際の商品やデジタル商品を扱う場合は、Orders APIを使用して、価格と在庫を管理し、[自動的に送料と税金を計算](https://stripe.com/docs/orders#shipping-and-taxes)し、[注文を作成して支払い](https://stripe.com/docs/orders#create-pay-orders)ます。それは3つの主な目的に基づいています：

- [Product](https://stripe.com/docs/api#products) API: あなたのビジネスが売るアイテムの包括的な表現（ex “ 2015 Limited Edition T-shirt”）

- [SKU](https://stripe.com/docs/api#skus) API([Stock Keeping Unit](https://retail-logi.com/glossary/sku/)): 属性とコスト（サイズ、色、通貨、コストなど）の組み合わせを考慮した、特定の製品のバリエーション。

- [Order](https://stripe.com/docs/api#orders) API: 顧客情報と購入したいSKUの組み合わせ
