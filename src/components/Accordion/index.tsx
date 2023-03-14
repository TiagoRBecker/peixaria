import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "react-bootstrap/Accordion";
export type PropsAccor = {
  title_one: string;
  title_two: string;
  body_one: string;
  body_two: string;
  body_one_ingred_one: string;
  body_one_ingred_two: string;
  body_one_ingred_three: string;
  body_one_ingred_four: string;
  body_one_ingred_five?: string;
  body_one_ingred_six?: string;
  body_one_ingred_seven?: string;
  body_one_ingred_eigth?: string;

  body_two_ingred_one: string;
  body_two_ingred_two: string;
  body_two_ingred_three: string;
  body_two_ingred_four: string;
  body_two_ingred_five?: string;
  body_two_ingred_six?: string;
  body_two_ingred_seven?: string;
  body_two_ingred_eigth?: string;
};
function AccordionCp({
  title_one,
  title_two,
  body_one,
  body_two,
  body_one_ingred_one,
  body_one_ingred_two,
  body_one_ingred_three,
  body_one_ingred_four,
  body_one_ingred_five,
  body_one_ingred_six,
  body_one_ingred_seven,
  body_one_ingred_eigth,

  body_two_ingred_one,
  body_two_ingred_two,
  body_two_ingred_three,
  body_two_ingred_four,
  body_two_ingred_five,
  body_two_ingred_six,
  body_two_ingred_seven,
  body_two_ingred_eigth


}: PropsAccor) {
  return (
    <Accordion defaultActiveKey="0" className="w-full h-full">
      <Accordion.Item eventKey="0">
        <Accordion.Header>{title_one}</Accordion.Header>
        <Accordion.Body>
          {body_one}
          <div className="">
            <li className="w-full h-full py-2 list-disc">
              {" "}
              {body_one_ingred_one}
            </li>
            <li className="w-full h-full py-2 list-disc">
              {" "}
              {body_one_ingred_two}
            </li>
            <li className="w-full h-full py-2 list-disc">
              {" "}
              {body_one_ingred_three}
            </li>
            <li className="w-full h-full py-2 list-disc">
              {" "}
              {body_one_ingred_four}
            </li>
            <li className={body_one_ingred_five ?"w-full h-full py-2 list-disc": "hidden"}>
              {" "}
              {body_one_ingred_five}
            </li>
            <li className={body_one_ingred_six?"w-full h-full py-2 list-disc":"hidden"}>
              {" "}
              { body_one_ingred_six}
            </li>
             <li className={body_one_ingred_seven?"w-full h-full py-2 list-disc":"hidden"}>
              {" "}
              { body_one_ingred_seven}
            </li>
            <li className={body_one_ingred_eigth?"w-full h-full py-2 list-disc":"hidden"}>
              {" "}
              { body_one_ingred_eigth}
            </li>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>{title_two}</Accordion.Header>
        <Accordion.Body className="text-blue">
          {body_two}
          <div className="">
            <li className="w-full h-full py-2 list-disc">
              {" "}
              {body_two_ingred_one}
            </li>
            <li className="w-full h-full py-2 list-disc">
              {" "}
              {body_two_ingred_two}
            </li>
            <li className="w-full h-full py-2 list-disc">
              {" "}
              {body_two_ingred_three}
            </li>
            <li className="w-full h-full py-2 list-disc">
              {" "}
              {body_two_ingred_four}
            </li>
            <li className={body_two_ingred_five? "w-full h-full py-2 list-disc":"hidden"}>
              {" "}
              {body_two_ingred_five}
            </li>
            <li className={body_two_ingred_six? "w-full h-full py-2 list-disc":"hidden"}>
              {" "}
              {body_two_ingred_six}
            </li>
            <li className={body_two_ingred_seven? "w-full h-full py-2 list-disc":"hidden"}>
              {" "}
              {body_two_ingred_seven}
            </li>
            <li className={body_two_ingred_eigth?"w-full h-full py-2 list-disc":"hidden"}>
              {" "}
              { body_two_ingred_eigth}
            </li>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionCp;
