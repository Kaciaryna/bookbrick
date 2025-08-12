import { RuleInterface } from "@/models/RuleInterface";

function Rule({ rule }: { rule: RuleInterface }) {
  return (
    <li className="list-row">
      <div>
        <img className="size-10 rounded-box" src={rule.image} />
      </div>
      <div>
        <div>{rule.title}</div>
        <div className="text-xs uppercase font-semibold opacity-60">
          {rule.description}
        </div>
      </div>
    </li>
  );
}

export default Rule;
