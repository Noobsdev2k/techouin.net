import { getSelectData, unGetSelectData } from '@/utils'

export const findAllDiscountCodesUnSelect = async ({
  limit = 50,
  page = 1,
  sort = 'ctime',
  filter,
  unSelect,
  model
}: any) => {
  const skip = (page - 1) * limit
  const sortBy = sort === 'ctime' ? { _id: -1 } : { _id: 1 }
  return await model.find(filter).sort(sortBy).skip(skip).limit(limit).select(unGetSelectData(unSelect)).lean()
}

export const findAllDiscountCodesSelect = async ({
  limit = 50,
  page = 1,
  sort = 'ctime',
  filter,
  select,
  model
}: any) => {
  const skip = (page - 1) * limit
  const sortBy = sort === 'ctime' ? { _id: -1 } : { _id: 1 }
  return await model.find(filter).sort(sortBy).skip(skip).limit(limit).select(getSelectData(select)).lean()
}

export const checkDiscountExists = async (model: any, filter = {}) => {
  return model.find(filter)
}
