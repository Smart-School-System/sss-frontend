import Joi from 'joi';

export const studentSchema = Joi.object({
	firstname: Joi.string().required(),
	lastname:  Joi.string().required(),
	othername:  Joi.string(),
	dob:  Joi.string().required(),
	gender:  Joi.string().required(),
	religion:  Joi.string().required(),
	admission_date:  Joi.string().required(),
	nationality:  Joi.string().required(),
	height:  Joi.string().required(),
	blood_group:  Joi.string().required(),
	blood_genotype:  Joi.string().required(),
	residential_address:  Joi.string().required(),
	postal_address:  Joi.string().required(),
	parent_name:  Joi.string().required(),
	phone_number_1:  Joi.string().required(),
	phone_number_2:  Joi.string().required(),
	email_address:  Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
	relationship:  Joi.string().required(),
});
