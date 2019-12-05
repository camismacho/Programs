#GLOBAL VARIABLES
	.data
#GLOBAL VARDECL INT
.comm x, 4, 4
#GLOBAL VARDECL INT
.comm y, 4, 4
#GLOBAL ARRAY VARDECL ival = 5
.comm arr, 20, 32
#STRING DATA SECTION
	.section	.rodata
.LC0:
	.string	"arr[1]=%d\n"
.LC1:
	.string	"arr[2]=%d\n"
.LC2:
	.string	"arr[3]=%d\n"
.LC3:
	.string	"a = %d\n"
.LC4:
	.string	"localtest=%d\n"
.LC5:
	.string	"if works!\n"
.LC6:
	.string	"else works!\n"
.LC7:
	.string	"if works!\n"
.LC8:
	.string	"else works!\n"
.LC9:
	.string	"goodbye"
.LC10:
	.string	"third arg"
.LC11:
	.string	"goodbye %s %d\n"
.LC12:
	.string	"second"
.LC13:
	.string	"Hello World!\n"
.LC14:
	.string	"loopy loop\n"
.LC15:
	.string	"do while loop m8\n"
	.text

		#*****-----FUNCTION func-----*****
#--FUNCTION ARG LIST
#PARAMETER VARDECL ival = 3
.comm a, 4, 4
#VARDECL STRING ival = 2
b:	.word 0
#VARDECL STRING ival = 1
s:	.word 0
#--LOCAL DECLARATIONS
#LOCAL VARDECL ival = -8
.comm localtest, 4, 4
#LOCAL VARDECL ival = -4
.comm localtwo, 4, 4
#--FUNCTION BODY
	.globl	func
	.type	func, @function
func:
	pushq	%rbp
	movq	%rsp, %rbp
	subq	$64, %rsp
#ASSIGNMENT
#--ASSIGNMENT LHS 
#EXPRESSION
#--EXPRESSION LHS
#CONSTANT INT 5
	movq	$5, %rdx
	pushq	%rdx
#--EXPRESSION RHS
#CONSTANT INT 5
	movq	$5, %rdx
	popq	%rcx
#EXPR ADD LHS + RHS
	addq	%rcx, %rdx
#--ASSIGNMENT TO arr ival = 0
	push	%rdx
#CONSTANT INT 1
	movq	$1, %rdx
	pop %rcx
	movq	%rcx, arr(,%rdx,4)
#ASSIGNMENT
#--ASSIGNMENT LHS 
#CONSTANT INT 11
	movq	$11, %rdx
#--ASSIGNMENT TO arr ival = 0
	push	%rdx
#CONSTANT INT 2
	movq	$2, %rdx
	pop %rcx
	movq	%rcx, arr(,%rdx,4)
#ASSIGNMENT
#--ASSIGNMENT LHS 
#CONSTANT INT 12
	movq	$12, %rdx
#--ASSIGNMENT TO arr ival = 0
	push	%rdx
#CONSTANT INT 3
	movq	$3, %rdx
	pop %rcx
	movq	%rcx, arr(,%rdx,4)

	#~~~~~FUNCALL printf~~~~~
#ARGUMENT
#CONSTANT STRING $.LC0
	movq	$.LC0, %rdx
	movq	%rdx, %rdi
#ARGUMENT
#VARREF (arr) ival = 0 valtype = 2
#CONSTANT INT 1
	movq	$1, %rdx
	movq	arr(,%rdx,4), %rdx
	movq	%rdx, %rsi
	movl	$0, %eax
	call	printf
	#~~~~~ENDFUNCALL printf~~~~~


	#~~~~~FUNCALL printf~~~~~
#ARGUMENT
#CONSTANT STRING $.LC1
	movq	$.LC1, %rdx
	movq	%rdx, %rdi
#ARGUMENT
#VARREF (arr) ival = 0 valtype = 2
#CONSTANT INT 2
	movq	$2, %rdx
	movq	arr(,%rdx,4), %rdx
	movq	%rdx, %rsi
	movl	$0, %eax
	call	printf
	#~~~~~ENDFUNCALL printf~~~~~


	#~~~~~FUNCALL printf~~~~~
#ARGUMENT
#CONSTANT STRING $.LC2
	movq	$.LC2, %rdx
	movq	%rdx, %rdi
#ARGUMENT
#VARREF (arr) ival = 0 valtype = 2
#CONSTANT INT 3
	movq	$3, %rdx
	movq	arr(,%rdx,4), %rdx
	movq	%rdx, %rsi
	movl	$0, %eax
	call	printf
	#~~~~~ENDFUNCALL printf~~~~~

#ASSIGNMENT
#--ASSIGNMENT LHS 
#CONSTANT INT 10
	movq	$10, %rdx
#--ASSIGNMENT TO a ival = 3
	movq	%rdx, %rcx
	movq	%rdx, %rdi

	#~~~~~FUNCALL printf~~~~~
#ARGUMENT
#CONSTANT STRING $.LC3
	movq	$.LC3, %rdx
	movq	%rdx, %rdi
#ARGUMENT
#VARREF (a) ival = 3 valtype = 0
	movq	%rcx, %rdx
	movq	%rdx, %rsi
	movl	$0, %eax
	call	printf
	#~~~~~ENDFUNCALL printf~~~~~

#ASSIGNMENT
#--ASSIGNMENT LHS 
#EXPRESSION
#--EXPRESSION LHS
#CONSTANT INT 42
	movq	$42, %rdx
	pushq	%rdx
#--EXPRESSION RHS
#CONSTANT INT 12
	movq	$12, %rdx
	popq	%rcx
#EXPR ADD LHS + RHS
	addq	%rcx, %rdx
#--ASSIGNMENT TO localtest ival = -8
	movq	%rdx, -8(%rbp)
	movq	%rdx, %rdi

	#~~~~~FUNCALL printf~~~~~
#ARGUMENT
#CONSTANT STRING $.LC4
	movq	$.LC4, %rdx
	movq	%rdx, %rdi
#ARGUMENT
#VARREF (localtest) ival = -8 valtype = 0
	movq	-8(%rbp), %rdx
	movq	%rdx, %rsi
	movl	$0, %eax
	call	printf
	#~~~~~ENDFUNCALL printf~~~~~

#IFTHEN
#RELEXPR
#CONSTANT INT 20
	movq	$20, %rdx
#--RELEXPR LHS
	pushq	%rdx
#CONSTANT INT 10
	movq	$10, %rdx
#--RELEXPR RHS
	popq	%rcx
#COMPARE LHS AND RHS
	cmp	%rdx, %rcx
#--RELATIONAL JUMP INSTR
	jg	LL101
#--IFBODY

	#~~~~~FUNCALL puts~~~~~
#ARGUMENT
#CONSTANT STRING $.LC6
	movq	$.LC6, %rdx
	movq	%rdx, %rdi
	movl	$0, %eax
	call	puts
	#~~~~~ENDFUNCALL puts~~~~~

	jmp	LL102
#--ELSEBODY
LL101:

	#~~~~~FUNCALL puts~~~~~
#ARGUMENT
#CONSTANT STRING $.LC5
	movq	$.LC5, %rdx
	movq	%rdx, %rdi
	movl	$0, %eax
	call	puts
	#~~~~~ENDFUNCALL puts~~~~~

#--CONTINUE PROGRAM
LL102:
#IFTHEN
#RELEXPR
#CONSTANT INT 20
	movq	$20, %rdx
#--RELEXPR LHS
	pushq	%rdx
#CONSTANT INT 10
	movq	$10, %rdx
#--RELEXPR RHS
	popq	%rcx
#COMPARE LHS AND RHS
	cmp	%rdx, %rcx
#--RELATIONAL JUMP INSTR
	jl	LL103
#--IFBODY

	#~~~~~FUNCALL puts~~~~~
#ARGUMENT
#CONSTANT STRING $.LC8
	movq	$.LC8, %rdx
	movq	%rdx, %rdi
	movl	$0, %eax
	call	puts
	#~~~~~ENDFUNCALL puts~~~~~

	jmp	LL104
#--ELSEBODY
LL103:

	#~~~~~FUNCALL puts~~~~~
#ARGUMENT
#CONSTANT STRING $.LC7
	movq	$.LC7, %rdx
	movq	%rdx, %rdi
	movl	$0, %eax
	call	puts
	#~~~~~ENDFUNCALL puts~~~~~

#--CONTINUE PROGRAM
LL104:
	movl	$0, %eax
	leave
	ret
		#*****-----ENDFUNCTION func-----*****


		#*****-----FUNCTION main-----*****
#--FUNCTION ARG LIST
#PARAMETER VARDECL ival = 2
.comm argc, 4, 4
#VARDECL STRING ival = 1
argv:	.word 0
#--LOCAL DECLARATIONS
#--FUNCTION BODY
	.globl	main
	.type	main, @function
main:
	pushq	%rbp
	movq	%rsp, %rbp
	subq	$64, %rsp

	#~~~~~FUNCALL func~~~~~
#ARGUMENT
#CONSTANT INT 42
	movq	$42, %rdx
	movq	%rdx, %rdi
#ARGUMENT
#CONSTANT STRING $.LC9
	movq	$.LC9, %rdx
	movq	%rdx, %rsi
#ARGUMENT
#CONSTANT STRING $.LC10
	movq	$.LC10, %rdx
	movq	%rdx, %rdx
	movl	$0, %eax
	call	func
	#~~~~~ENDFUNCALL func~~~~~


	#~~~~~FUNCALL printf~~~~~
#ARGUMENT
#CONSTANT STRING $.LC11
	movq	$.LC11, %rdx
	movq	%rdx, %rdi
#ARGUMENT
#CONSTANT STRING $.LC12
	movq	$.LC12, %rdx
	movq	%rdx, %rsi
#ARGUMENT
#EXPRESSION
#--EXPRESSION LHS
#CONSTANT INT 42
	movq	$42, %rdx
	pushq	%rdx
#--EXPRESSION RHS
#EXPRESSION
#--EXPRESSION LHS
#CONSTANT INT 4
	movq	$4, %rdx
	pushq	%rdx
#--EXPRESSION RHS
#EXPRESSION
#--EXPRESSION LHS
#VARREF (x) ival = -4 valtype = 0
	movq	-4(%rbp), %rdx
	pushq	%rdx
#--EXPRESSION RHS
#CONSTANT INT 2
	movq	$2, %rdx
	popq	%rcx
#EXPR ADD LHS + RHS
	addq	%rcx, %rdx
	popq	%rcx
#EXPR ADD LHS + RHS
	addq	%rcx, %rdx
	popq	%rcx
#EXPR ADD LHS + RHS
	addq	%rcx, %rdx
	movq	%rdx, %rdx
	movl	$0, %eax
	call	printf
	#~~~~~ENDFUNCALL printf~~~~~


	#~~~~~FUNCALL puts~~~~~
#ARGUMENT
#CONSTANT STRING $.LC13
	movq	$.LC13, %rdx
	movq	%rdx, %rdi
	movl	$0, %eax
	call	puts
	#~~~~~ENDFUNCALL puts~~~~~

#ASSIGNMENT
#--ASSIGNMENT LHS 
#CONSTANT INT 0
	movq	$0, %rdx
#--ASSIGNMENT TO x ival = -4
	movq	%rdx, -4(%rbp)
	movq	%rdx, %rdi
#WHILE LOOP
	jmp	LL105
#--LOOPBODY
LL106:

	#~~~~~FUNCALL puts~~~~~
#ARGUMENT
#CONSTANT STRING $.LC14
	movq	$.LC14, %rdx
	movq	%rdx, %rdi
	movl	$0, %eax
	call	puts
	#~~~~~ENDFUNCALL puts~~~~~

#ASSIGNMENT
#--ASSIGNMENT LHS 
#EXPRESSION
#--EXPRESSION LHS
#VARREF (x) ival = -4 valtype = 0
	movq	-4(%rbp), %rdx
	pushq	%rdx
#--EXPRESSION RHS
#CONSTANT INT 1
	movq	$1, %rdx
	popq	%rcx
#EXPR ADD LHS + RHS
	addq	%rcx, %rdx
#--ASSIGNMENT TO x ival = -4
	movq	%rdx, -4(%rbp)
	movq	%rdx, %rdi
#--LOOPCONDITION
LL105:
#RELEXPR
#VARREF (x) ival = -4 valtype = 0
	movq	-4(%rbp), %rdx
#--RELEXPR LHS
	pushq	%rdx
#CONSTANT INT 10
	movq	$10, %rdx
#--RELEXPR RHS
	popq	%rcx
#COMPARE LHS AND RHS
	cmp	%rdx, %rcx
#--RELATIONAL JUMP INSTR
	jl	LL106
#ASSIGNMENT
#--ASSIGNMENT LHS 
#CONSTANT INT 0
	movq	$0, %rdx
#--ASSIGNMENT TO y ival = -4
	movq	%rdx, -4(%rbp)
	movq	%rdx, %rdi
#DOWHILE LOOP
	jmp	LL107
#--LOOPBODY
LL108:

	#~~~~~FUNCALL puts~~~~~
#ARGUMENT
#CONSTANT STRING $.LC15
	movq	$.LC15, %rdx
	movq	%rdx, %rdi
	movl	$0, %eax
	call	puts
	#~~~~~ENDFUNCALL puts~~~~~

#ASSIGNMENT
#--ASSIGNMENT LHS 
#EXPRESSION
#--EXPRESSION LHS
#VARREF (y) ival = -4 valtype = 0
	movq	-4(%rbp), %rdx
	pushq	%rdx
#--EXPRESSION RHS
#CONSTANT INT 1
	movq	$1, %rdx
	popq	%rcx
#EXPR ADD LHS + RHS
	addq	%rcx, %rdx
#--ASSIGNMENT TO y ival = -4
	movq	%rdx, -4(%rbp)
	movq	%rdx, %rdi
#--LOOPCONDITION
LL107:
#RELEXPR
#VARREF (y) ival = -4 valtype = 0
	movq	-4(%rbp), %rdx
#--RELEXPR LHS
	pushq	%rdx
#CONSTANT INT 10
	movq	$10, %rdx
#--RELEXPR RHS
	popq	%rcx
#COMPARE LHS AND RHS
	cmp	%rdx, %rcx
#--RELATIONAL JUMP INSTR
	jl	LL108
	movl	$0, %eax
	leave
	ret
		#*****-----ENDFUNCTION main-----*****


		#*****-----FUNCTION test-----*****
#--FUNCTION ARG LIST
#PARAMETER VARDECL ival = 4
.comm one, 4, 4
#PARAMETER VARDECL ival = 3
.comm two, 4, 4
#PARAMETER VARDECL ival = 2
.comm three, 4, 4
#PARAMETER VARDECL ival = 1
.comm four, 4, 4
#--LOCAL DECLARATIONS
#LOCAL VARDECL ival = -36
.comm this, 4, 4
#LOCAL VARDECL ival = -32
.comm is, 4, 4
#LOCAL VARDECL ival = -28
.comm going, 4, 4
#LOCAL VARDECL ival = -24
.comm to, 4, 4
#LOCAL VARDECL ival = -20
.comm be, 4, 4
#LOCAL VARDECL ival = -16
.comm alot, 4, 4
#LOCAL VARDECL ival = -12
.comm of, 4, 4
#LOCAL VARDECL ival = -8
.comm local, 4, 4
#LOCAL VARDECL ival = -4
.comm variables, 4, 4
#--FUNCTION BODY
	.globl	test
	.type	test, @function
test:
	pushq	%rbp
	movq	%rsp, %rbp
	subq	$64, %rsp
	movl	$0, %eax
	leave
	ret
		#*****-----ENDFUNCTION test-----*****

