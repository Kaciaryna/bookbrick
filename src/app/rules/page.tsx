import { db } from '@/utils/firebase.admin';
import Rule from '@/components/rule/Rule';
import { RuleInterface } from '@/models/RuleInterface';

async function loadRules(): Promise<RuleInterface[]> {
  const snapshot = await db.collection('rules').get();
  return snapshot.docs.map((rule) => {
    return {
      id: rule.id,
      ...(rule.data() as Omit<RuleInterface, 'id'>),
    };
  });
}

async function AboutPage() {
  const rules: RuleInterface[] = await loadRules();

  return (
    <ul className='list bg-base-100 rounded-box shadow-md'>
      <li className='p-4 pb-2 text-xs tracking-wide opacity-60'>By the Book</li>
      {rules.map((rule) => (
        <Rule rule={rule} key={rule.id} />
      ))}
    </ul>
  );
}

export default AboutPage;
