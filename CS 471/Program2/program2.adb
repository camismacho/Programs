--Joseph Camacho-Terrazas
--9/6/2020
--Input: None
--Output: The result of each evaluation, should be either T or F and sometimes an evaluation statement
--Precondition: None
--Postcondition: Print the results from tests and a confirmation message if 2nd condition is reached in comparison statements.

with Ada.Text_IO; use Ada.Text_IO;
with Ada.Integer_Text_IO; use Ada.Integer_Text_IO;

procedure program2 is
    A : Integer;

    --This function will print out a statement if it's evaluated
    --It returns 1 so that it can be evaluated against a 1 or a 0
    function Evaluate return Integer is
    begin
        Put_Line("Condition has been evaluated");
        return 1;
    end Evaluate;

begin

    --Set A to 1 so that we can test our logical operations
    A := 1;

    --For AND, I am testing both AND and AND THEN because Ada will always evaluate both statements for AND and short circuit for AND THEN
    --Begin testing AND statements
    Put_Line("===Testing AND with function as second condition===");

    --Test F and T
    if A = 0 and Evaluate = 1 then
        Put_Line("True");
        New_Line;
    else
        Put_Line("False");
        New_Line;
    end if;

    --Test T and F
    if A = 1 and Evaluate = 0 then
        Put_Line("True");
        New_Line;
    else
        Put_Line("False");
        New_Line;
    end if;

    --Test T and T
    if A = 1 and Evaluate = 1 then
        Put_Line("True");
        New_Line;
    else
        Put_Line("False");
        New_Line;
    end if;

    --Test F and F
    if A = 0 and Evaluate = 0 then
        Put_Line("True");
        New_Line;
    else
        Put_Line("False");
        New_Line;
    end if;

    --Testing with function as the first condition just to verify that the function does work properly
    Put_Line("===Testing AND with function as first condition===");

    --Test F and T
    if Evaluate = 0 and A = 1 then
        Put_Line("True");
        New_Line;
    else
        Put_Line("False");
        New_Line;
    end if;

    --Test T and F
    if Evaluate = 1 and A = 0 then
        Put_Line("True");
        New_Line;
    else
        Put_Line("False");
        New_Line;
    end if;

    --Test T and T
    if Evaluate = 1 and A = 1 then
        Put_Line("True");
        New_Line;
    else
        Put_Line("False");
        New_Line;
    end if;

    --Test F and F
    if Evaluate = 0 and A = 0 then
        Put_Line("True");
        New_Line;
    else
        Put_Line("False");
        New_Line;
    end if;
    
    --Begin testing AND THEN statements
    Put_Line("===Testing AND THEN with function as second condition===");

    --Test F and then T
    if A = 0 and then Evaluate = 1 then
        Put_Line("True");
        New_Line;
    else
        Put_Line("False");
        New_Line;
    end if;

    --Test T and then F
    if A = 1 and then Evaluate = 0 then
        Put_Line("True");
        New_Line;
    else
        Put_Line("False");
        New_Line;
    end if;

    --Test T and then T
    if A = 1 and then Evaluate = 1 then
        Put_Line("True");
        New_Line;
    else
        Put_Line("False");
        New_Line;
    end if;

    --Test F and then F
    if A = 0 and then Evaluate = 0 then
        Put_Line("True");
        New_Line;
    else
        Put_Line("False");
        New_Line;
    end if;

    Put_Line("===Testing AND THEN with function as first condition===");

    --Test F and then T
    if Evaluate = 0 and then A =1 then
        Put_Line("True");
        New_Line;
    else
        Put_Line("False");
        New_Line;
    end if;

    --Test T and then F
    if Evaluate = 1 and then A = 0 then
        Put_Line("True");
        New_Line;
    else
        Put_Line("False");
        New_Line;
    end if;

    --Test T and then T
    if Evaluate = 1 and then A = 1 then
        Put_Line("True");
        New_Line;
    else
        Put_Line("False");
        New_Line;
    end if;

    --Test F and then F
    if Evaluate = 0 and then A = 0 then
        Put_Line("True");
        New_Line;
    else
        Put_Line("False");
        New_Line;
    end if;

end program2;
