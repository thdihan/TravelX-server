import { CategoryModel } from './category.model';

const createCategoryIntoDB = async (name: string) => {
    const category = await CategoryModel.create({ name });
    return category;
};

const getCategoriesFromDB = async () => {
    const categories = await CategoryModel.find();
    return categories;
};

export const CategoryService = {
    createCategoryIntoDB,
    getCategoriesFromDB,
};
