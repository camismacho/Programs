;;Joseph Camacho-Terrazas
;;11/17/2020
;;Input: A logical argument
;;Output: A reduced CD form, number of specified operators, or a list of all unique variables
;;Precondition: The user gives a proper CD as input
;;Postcondition: The program will give the correct output based on the specified function.

;;Evaluates a circuit design

;;Counts the number of specified operators in the argument
;;Format is 'operator '(CD)
;;Code adapted from Shaun Cooper
(define (count_operator x CD)
    (cond ((null? CD) 0);;Empty case
        ((not (list? CD));;Non-list case
        (if (eq? x CD) 1 0));;Perform count on the list
        (else (+ (count_operator x (car CD)) (count_operator x (cdr CD)))));;End cond
);;End define

;;Finds all input variables in the argument
;;Format is '(CD)
;;Code adapted from Shaun Cooper
(define (findVariables CD)
    (cond
        ((null? CD) '());;Empty case
        ((not (list? CD)) '());;Non-list case
        ((or (eq? (car CD) 1);;Find the variables in the list using recursion
                (eq? (car CD) 0)
                (eq? (car CD) 'AND)
                (eq? (car CD) 'OR)
                (eq? (car CD) 'NOT))
            (findVariables (cdr CD)))
        (else (cons (car CD) (findVariables (cdr CD)))));;End cond
);;End define

;;Finds all the unique variables in the argument
;;Format is '(CD)
;;Code adapted from Shaun Cooper
(define (unique CD)
    (cond ((null? CD) '());;Empty Case
        ((not (list? CD)) '());;Non-list Case
        ((member (car CD) (cdr CD)) (unique (cdr CD)));;Split list to find unique variables
        (else (cons (car CD) (unique (cdr CD)))));;End cond          
);;End define

;; NOT CD1
;;Code adapted from Shaun Cooper
(define(evalcd CD)
    ;; Base Case
    (cond ((null? CD) '()) 
        ;; True, False, or A1....A1000
        ((not (list? CD)) CD)
        ((eq? (car CD) 'NOT) (evalcd_not CD))
        ((eq? (car CD) 'AND) (evalcd_and CD))
        ((eq? (car CD) 'OR ) (evalcd_or CD)));;End cond
);;End define

;;PRE:MUST be a (NOT CD) form (CAR CD) => NOT
;;Reduce the Argument and see if we can reduce it
;;Code adapted from Shaun Cooper
(define (evalcd_not CD)
    (cond ((eq? (evalcd (cadr CD)) 0) 1)
        ((eq? (evalcd (cadr CD)) 1) 0)
        (else (cons 'NOT (list (evalcd (cadr CD))))));;End cond
);;End define

;;PRE: MUST be (AND CD1 CD2) format
;;POST: Apply simple tautologies to the CD1 and CD2 and maybe reduce
;;AND
;;Code adapted from Shaun Cooper
(define (evalcd_and CD)
    (cond ((eq? (evalcd (cadr CD)) 0) 0)
        ((eq? (evalcd (caddr CD)) 0) 0)
        ((eq? (evalcd (cadr CD)) 1) (evalcd (caddr CD)))
        ((eq? (evalcd (caddr CD)) 1) (evalcd (cadr CD)))
        (else (cons 'AND 
            (list (evalcd (cadr CD))
            (evalcd (caddr CD))))));;End cond
);;End define

;;PRE: MUST be (OR CD1 CD2) format
;;POST: Apply simple tautologies to the CD1 and CD2 and maybe reduce
;;OR                       
(define (evalcd_or CD)
    (cond ((eq? (evalcd (cadr CD)) 1) 1)
        ((eq? (evalcd (caddr CD)) 1) 1)
        ((eq? (evalcd (cadr CD)) 0) (evalcd (caddr CD)))
        ((eq? (evalcd (caddr CD)) 0) (evalcd (cadr CD)))
        (else (cons 'OR 
            (list (evalcd (cadr CD))
            (evalcd (caddr CD))))));;End cond
);;End define