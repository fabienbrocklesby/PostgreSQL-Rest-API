import Joi from 'joi';

export default (data, required = []) => Joi.object().keys({
  id: Joi.string().uuid(),
  title: Joi.string().min(3).max(40),
  body: Joi.string().min(3).max(40),
})
.fork(required, (field) => field.required())
.validateAsync(data);