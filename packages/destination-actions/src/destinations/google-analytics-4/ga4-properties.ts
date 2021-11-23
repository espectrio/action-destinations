import { InputField } from '@segment/actions-core/src/destination-kit/types'

export const promotion_id: InputField = {
  label: 'Promotion ID',
  type: 'string',
  description: 'The ID of the promotion associated with the event.'
}

export const promotion_name: InputField = {
  label: 'Promotion Name',
  type: 'string',
  description: 'The name of the promotion associated with the event.'
}

export const creative_slot: InputField = {
  label: 'Creative Slot',
  type: 'string',
  description: 'The name of the promotional creative slot associated with the event.'
}

export const creative_name: InputField = {
  label: 'Creative Name',
  type: 'string',
  description: 'The name of the promotional creative.'
}

export const tax: InputField = {
  label: 'Tax',
  type: 'number',
  description: 'Total tax associated with the transaction.',
  default: {
    '@path': '$.properties.tax'
  }
}

export const shipping: InputField = {
  label: 'Shipping',
  type: 'number',
  description: 'Shipping cost associated with the transaction.',
  default: {
    '@path': '$.properties.shipping'
  }
}

export const transaction_id: InputField = {
  label: 'Order Id',
  type: 'string',
  description: 'The unique identifier of a transaction.',
  default: {
    '@path': '$.properties.order_id'
  }
}

export const affiliation: InputField = {
  label: 'Affiliation',
  type: 'string',
  description: 'Store or affiliation from which this transaction occurred (e.g. Google Store).',
  default: {
    '@path': '$.properties.affiliation'
  }
}

export const client_id: InputField = {
  label: 'Client ID',
  description: 'Uniquely identifies a user instance of a web client.',
  type: 'string',
  default: {
    '@if': {
      exists: { '@path': '$.userId' },
      then: { '@path': '$.userId' },
      else: { '@path': '$.anonymousId' }
    }
  }
}

export const currency: InputField = {
  label: 'Currency',
  type: 'string',
  description: 'Currency of the items associated with the event, in 3-letter ISO 4217 format.'
}

export const value: InputField = {
  label: 'Value',
  type: 'number',
  description: 'The monetary value of the event.'
}

export const coupon: InputField = {
  label: 'Coupon',
  type: 'string',
  description: 'Coupon code used for a purchase.'
}

export const payment_type: InputField = {
  label: 'Payment Type',
  type: 'string',
  description: 'The chosen method of payment.',
  default: {
    '@path': '$.properties.payment_method'
  }
}

export const items: InputField = {
  label: 'Products',
  description: 'The list of products purchased.',
  type: 'object',
  multiple: true,
  //required: true, needed for: addPaymentInfo, addToWishlist
  properties: {
    item_id: {
      label: 'Product ID',
      type: 'string',
      description: 'Identifier for the product being purchased.'
    },
    item_name: {
      label: 'Name',
      type: 'string',
      description: 'Name of the product being purchased.'
    },
    affiliation: {
      label: 'Affiliation',
      type: 'string',
      description: 'A product affiliation to designate a supplying company or brick and mortar store location.'
    },
    coupon: {
      label: 'Coupon',
      type: 'string',
      description: 'Coupon code used for a purchase.'
    },
    currency: {
      label: 'Currency',
      type: 'string',
      description: 'Currency of the purchase or items associated with the event, in 3-letter ISO 4217 format.'
    },
    discount: {
      label: 'Discount',
      type: 'number',
      description: 'Monetary value of discount associated with a purchase.'
    },
    index: {
      label: 'Index',
      type: 'number',
      description: 'The index/position of the item in a list.'
    },
    item_brand: {
      label: 'Brand',
      type: 'string',
      description: 'Brand associated with the product.'
    },
    item_category: {
      label: 'Category',
      type: 'string',
      description: 'Product category.'
    },
    item_category2: {
      label: 'Category 2',
      type: 'string',
      description: 'Product category 2.'
    },
    item_category3: {
      label: 'Category 3',
      type: 'string',
      description: 'Product category 3.'
    },
    item_category4: {
      label: 'Category 4',
      type: 'string',
      description: 'Product category 4.'
    },
    item_category5: {
      label: 'Category 5',
      type: 'string',
      description: 'Product category 5.'
    },
    item_list_id: {
      label: 'Item List ID',
      type: 'string',
      description: 'The ID of the list in which the item was presented to the user.'
    },
    item_list_name: {
      label: 'Item List Name',
      type: 'string',
      description: 'The name of the list in which the item was presented to the user.'
    },
    item_variant: {
      label: 'Variant',
      type: 'string',
      description: 'Variant of the product (e.g. Black).'
    },
    location_id: {
      label: 'Location ID',
      type: 'string',
      description: 'The location associated with the item.'
    },
    price: {
      label: 'Price',
      type: 'number',
      description: 'Price of the product being purchased, in units of the specified currency parameter.'
    },
    quantity: {
      label: 'Quantity',
      type: 'integer',
      description: 'Item quantity.'
    }
  }
}
