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
	.string	"localtest=%d\n"
.LC1:
	.string	"goodbye %s %d\n"
.LC2:
	.string	"second"
.LC3:
	.string	"loopy loop\n"
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
#CONSTANT INT 42
	movq	$42, %rdx
	pushq	%rdx
#--EXPRESSION RHS
#CONSTANT INT 12
	movq	$12, %rdx
	popq	%rcx
#EXPR ADD LHS + RHS
	addq	%rcx, %rdx
#--ASSIGNMENT TO localtest 
	movq	%rdx, localtest
	movq	%rdx, %rdi

	#~~~~~FUNCALL printf~~~~~
#ARGUMENT
#CONSTANT STRING $.LC0
	movq	$.LC0, %rdx
	movq	%rdx, %rdi
#ARGUMENT
#VARREF (localtest) ival = -8
	movq	localtest, %rdx
	movq	%rdx, %rsi
	movl	$0, %eax
	call	printf
	#~~~~~ENDFUNCALL printf~~~~~


	leave
	movl	$0, %eax
	ret
		#*****-----ENDFUNCTION func-----*****


		#*****-----FUNCTION main-----*****
#--FUNCTION ARG LIST
#PARAMETER VARDECL ival = 2
.comm argc, 4, 4
#VARDECL STRING ival = 1
argv:	.word 0
#--LOCAL DECLARATIONS
#LOCAL VARDECL ival = -8
.comm anothertest, 4, 4
#LOCAL VARDECL ival = -4
.comm yayanother, 4, 4
#--FUNCTION BODY
	.globl	main
	.type	main, @function
main:
	pushq	%rbp
	movq	%rsp, %rbp
	subq	$64, %rsp
#ASSIGNMENT
#--ASSIGNMENT LHS 
#CONSTANT INT 10
	movq	$10, %rdx
#--ASSIGNMENT TO anothertest 
	movq	%rdx, anothertest
	movq	%rdx, %rdi

	#~~~~~FUNCALL printf~~~~~
#ARGUMENT
#CONSTANT STRING $.LC1
	movq	$.LC1, %rdx
	movq	%rdx, %rdi
#ARGUMENT
#CONSTANT STRING $.LC2
	movq	$.LC2, %rdx
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
#VARREF (anothertest) ival = -8
	movq	anothertest, %rdx
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

#ASSIGNMENT
#--ASSIGNMENT LHS 
#CONSTANT INT 0
	movq	$0, %rdx
#--ASSIGNMENT TO yayanother 
	movq	%rdx, yayanother
	movq	%rdx, %rdi
#WHILE LOOP
	jmp	LL101
#--LOOPBODY
LL102:

	#~~~~~FUNCALL puts~~~~~
#ARGUMENT
#CONSTANT STRING $.LC3
	movq	$.LC3, %rdx
	movq	%rdx, %rdi
	movl	$0, %eax
	call	puts
	#~~~~~ENDFUNCALL puts~~~~~

#ASSIGNMENT
#--ASSIGNMENT LHS 
#EXPRESSION
#--EXPRESSION LHS
#VARREF (yayanother) ival = -4
	movq	yayanother, %rdx
	pushq	%rdx
#--EXPRESSION RHS
#CONSTANT INT 1
	movq	$1, %rdx
	popq	%rcx
#EXPR ADD LHS + RHS
	addq	%rcx, %rdx
#--ASSIGNMENT TO yayanother 
	movq	%rdx, yayanother
	movq	%rdx, %rdi
#--LOOPCONDITION
LL101:
#RELEXPR
#VARREF (yayanother) ival = -4
	movq	yayanother, %rdx
#--RELEXPR LHS
	pushq	%rdx
#CONSTANT INT 10
	movq	$10, %rdx
#--RELEXPR RHS
	popq	%rcx
#COMPARE LHS AND RHS
	cmp	%rdx, %rcx
#--RELATIONAL JUMP INSTR
	jl	LL102

	leave
	movl	$0, %eax
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

	leave
	movl	$0, %eax
	ret
		#*****-----ENDFUNCTION test-----*****

