import { writable } from "svelte/store";
import Client from 'shopify-buy';
import _ from 'lodash'

export const webData = writable(null, () => {
  console.log('SUBSCRIBER')
  return () => {
    console.log('UNSUBSCRIBED')
    webData.subscribe(value => {
      value = null
      return value
    })
  }
})

export const store = {

  init: () => {
    const client = Client.buildClient({
        domain: 'unwind-bedding.myshopify.com',
        storefrontAccessToken: 'd20d231f6841303b7bb1ba4ac45b788f'
    });

    client.product.fetchAll().then((products) => {
        store.updateStore(products)
    });


  },

  updateStore: (data) => {
    webData.update((prevState: any) => {
        let parsedData: any = {
            mattresses: null,
            pillows: null
        }
        let tempMattress = data.find(item => item.id === 'gid://shopify/Product/6623455838388')
        parsedData.mattresses = {
            description: tempMattress.description,
            id: tempMattress.id,
            images: tempMattress.images.map(image => {
                let clonedImage = _.cloneDeep(image)
                let parsedImage: any = {
                    id: clonedImage.id,
                    src: clonedImage.src,
                };
                return parsedImage
            }),
            variants: tempMattress.variants.map(variant => {
                let clonedVariant = _.cloneDeep(variant)
                let parsedVariant: any = {
                    id: clonedVariant.id,
                    price: {
                        amount: clonedVariant.price.amount,
                        currencyCode: clonedVariant.price.currencyCode
                    },
                    title: clonedVariant.title,
                };
                return parsedVariant
            })
        }
        let tempPillows = data.find(item => item.id === 'gid://shopify/Product/6713517277364')
        parsedData.pillows = {
            description: tempPillows.description,
            id: tempPillows.id,
            images: tempPillows.images.map(image => {
                let clonedImage = _.cloneDeep(image)
                let parsedImage: any = {
                    id: clonedImage.id,
                    src: clonedImage.src,
                };
                return parsedImage
            }),
            variants: tempPillows.variants.map(variant => {
                let clonedVariant = _.cloneDeep(variant)
                let parsedVariant: any = {
                    id: clonedVariant.id,
                    price: {
                        amount: clonedVariant.price.amount,
                        currencyCode: clonedVariant.price.currencyCode
                    },
                    title: clonedVariant.title,
                };
                return parsedVariant
            })
        }



        return parsedData
    })
  },

  subscribeToWebData: webData.subscribe

}




