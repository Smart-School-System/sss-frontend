import Joi from 'joi';

export const validateParentDetails = Joi.object({
	name: Joi.string().required(),
	email:  Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).optional(),
	contact:  Joi.string().required(),
	other_contact:  Joi.string().optional(),
	occupation:  Joi.string().required(),
	familial_relation:  Joi.string().required(),
});
