import { RuleInterface } from '@/models/RuleInterface';

function Rule({ rule }: { rule: RuleInterface }) {
  return (
    <li className='list-row'>
      <div>
        <img className='rounded-box size-10' src={rule.image} alt='cover' />
      </div>
      <div>
        <div>{rule.title}</div>
        <div className='text-xs font-semibold uppercase opacity-60'>
          {rule.description}
        </div>
      </div>
    </li>
  );
}

export default Rule;
