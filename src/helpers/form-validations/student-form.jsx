import Joi from 'joi';

export const studentSchema = Joi.object({
	first_name: Joi.string().required(),
	last_name:  Joi.string().required(),
	other_name:  Joi.string(),
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
});
