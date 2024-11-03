/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import { AnyZodObject, ZodArray, ZodEffects, ZodRecord } from 'zod';
import catchAsync from '../utils/catchAsync';

const validateImageFileRequest = (
    schema: AnyZodObject | ZodEffects<any> | ZodArray<any> | ZodRecord<any>,
) => {
    return catchAsync(
        async (req: Request, res: Response, next: NextFunction) => {
            const parsedFile = await schema.parseAsync({
                files: req.files,
            });
            console.log('IMAGE VALIDATION==');

            req.files = parsedFile.files;

            next();
        },
    );
};

export default validateImageFileRequest;
