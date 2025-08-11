import { db } from "@/utils/firebase.admin";
import Rule from "@/components/rule/Rule";
import { RuleInterface } from "@/models/RuleInterface";

async function loadRules(): Promise<any> {
  const snapshot = await db.collection("rules").get();
  return snapshot.docs.map((rule) => {
    return {
      id: rule.id,
      ...(rule.data() as Omit<any, "id">),
    };
  });
}

async function AboutPage() {
  const rules: RuleInterface[] = await loadRules();

  return (
    <ul className="list bg-base-100 rounded-box shadow-md">
      <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">By the Book</li>
      {rules.map((rule) => (
        <Rule rule={rule} key={rule.id} />
      ))}
    </ul>
  );
}

export default AboutPage;
