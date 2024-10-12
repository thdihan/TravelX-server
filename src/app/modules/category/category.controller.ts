import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { CategoryService } from './category.service';

const createCategory = catchAsync(async (req, res) => {
    const result = await CategoryService.createCategoryIntoDB(req.body.name);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Category created successfully',
        data: result,
    });
});

const getCategories = catchAsync(async (req, res) => {
    const result = await CategoryService.getCategoriesFromDB();

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Categories fetched successfully',
        data: result,
    });
});

export const CategoryController = {
    createCategory,
    getCategories,
};
