import Client from 'shopify-buy';

const storefrontAccessCredentials = {
	domain: 'ardkeen-quality-food-store.myshopify.com',
	storefrontAccessToken: 'cae8c17c052bf973045acfc201260863'    
};

const ShopifyBuyClient = Client.buildClient(storefrontAccessCredentials);

export default ShopifyBuyClient;