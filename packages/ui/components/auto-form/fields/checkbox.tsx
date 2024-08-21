import { Checkbox } from '@ui/components/checkbox';
import { FormControl, FormItem } from '@ui/components/form';

import AutoFormLabel from '../common/label';
import AutoFormTooltip from '../common/tooltip';
import { AutoFormInputComponentProps } from '../types';

export default function AutoFormCheckbox({
  label,
  isRequired,
  field,
  fieldConfigItem,
  fieldProps
}: AutoFormInputComponentProps) {
  return (
    <div>
      <FormItem>
        <div className="mb-3 flex items-center gap-3">
          <FormControl>
            <Checkbox checked={field.value} onCheckedChange={field.onChange} {...fieldProps} />
          </FormControl>
          <AutoFormLabel label={fieldConfigItem?.label || label} isRequired={isRequired} />
        </div>
      </FormItem>
      <AutoFormTooltip fieldConfigItem={fieldConfigItem} />
    </div>
  );
}
