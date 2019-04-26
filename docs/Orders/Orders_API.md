# Orders API
Orders APIを使用して、Stripeを通じて商品を販売および整理します。

---

実際の商品やデジタル商品を扱う場合は、Orders APIを使用して、価格と在庫を管理し、[自動的に送料と税金を計算](https://stripe.com/docs/orders#shipping-and-taxes)し、[注文を作成して支払い](https://stripe.com/docs/orders#create-pay-orders)ます。それは3つの主な目的に基づいています：

- [Product](https://stripe.com/docs/api#products) API: あなたのビジネスが売るアイテムの包括的な表現（ex “ 2015 Limited Edition T-shirt”）

- [SKU](https://stripe.com/docs/api#skus) API([Stock Keeping Unit](https://retail-logi.com/glossary/sku/)): 属性とコスト（サイズ、色、通貨、コストなど）の組み合わせを考慮した、特定の製品のバリエーション。

- [Order](https://stripe.com/docs/api#orders) API: 顧客情報と購入したいSKUの組み合わせ

Stripeでは、価格と在庫を管理し、自動的に送料と税金を計算し、注文を作成して支払うことができます。注文を開始するには、商品とSKUを定義し、出荷と税の統合を構成する必要があります。在庫を設定したら、注文を作成して支払うことができます。

このガイドでは、開発者によるOrders APIの使用方法について説明します。開発者は、ベストプラクティスやWebHookの使用など、追加情報についてはOrders Guideを読むこともできます。

---

## [When to use orders](https://stripe.com/docs/orders#when-to-use-orders)
注文は、Stripe APIの他の部分とうまく統合されています。たとえば、注文を[支払う(API)](https://stripe.com/docs/api/orders/pay)と[Chargeオブジェクト(API)](https://stripe.com/docs/api/charges/object)が作成されます。同様に、[注文を返す(API)](https://stripe.com/docs/api/orders/return)と、その請求の全部または一部の返金が発生します。ご注文は、基本料金を超えて追加機能をサポートしています。

- [Avalara](https://stripe.com/docs/orders/avalara)、[TaxJar](https://stripe.com/docs/orders/taxjar)、または [Taxamo](https://stripe.com/docs/orders/taxamo) による注文によっての税金を計算する
- EasyPostまたはShippoを使用してUSPS、FedExなどから配送料金を取得する
