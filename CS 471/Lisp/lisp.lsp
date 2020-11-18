;;Joseph Camacho-Terrazas
;;11/17/2020
;;Input: A logical argument
;;Output: A reduced CD form, number of specified operators, or a list of all unique variables
;;Precondition: The user gives a proper CD as input
;;Postcondition: The program will give the correct output based on the specified function.

;;Evaluates a circuit design

;;Counts the number of specified operators in the argument
;;Format is 'operator '(operator list)
(define (count_operator x operatorlist)
    (cond ((null? operatorlist) 0)
        ((not (list? operatorlist))
        (if (eq? x operatorlist) 1 0))
        (else (+ (count_operator x (car operatorlist)) (count_operator x (cdr operatorlist)))));;End cond
);;End define

;;Lists all the unique variables in the argument
;;Format is '(operator list)
(define (unique operatorlist)
    (cond ((null? operatorlist) '() )
        ((not (list? operatorlist)) '() )
        ((member (car operatorlist) (cdr operatorlist)) (unique (cdr operatorlist)))
        (else (cons (car operatorlist) (unique (cdr operatorlist)))));;End cond          
);;End define

;; NOT CD1
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
(define (evalcd_not CD)
    (cond ((eq? (evalcd (cadr CD)) 0) 1)
        ((eq? (evalcd (cadr CD)) 1) 0)
        (else (cons 'NOT (list (evalcd (cadr CD))))));;End cond
);;End define

;;PRE: MUST be (AND CD1 CD2) format
;;POST: Apply simple tautologies to the CD1 and CD2 and maybe reduce
;;AND
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