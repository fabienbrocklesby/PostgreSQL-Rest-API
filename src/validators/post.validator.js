import Joi from 'joi';

export default (data, required = []) => Joi.object().keys({
  id: Joi.string().uuid(),
  title: Joi.string().min(2).max(50),
  body: Joi.string().min(4).max(100),
})
  .fork(required, (field) => field.required())
  .validateAsync(data);
