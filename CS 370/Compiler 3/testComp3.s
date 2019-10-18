	.data
	x:     .word 0
	y:     .word 0
	.section	.rodata
.LC0:
	.string	"hello world!\n"
.LC1:
	.string	"x=%d\n"
	.text
	.globl	func
	.type	func, @function
func:
	pushq	%rbp
	movq	%rsp, %rbp
	subq	$32, %rsp
	;puts function
	;parameters
	movl	%edi, -4(%rbp)
	movq	%rsi, -16(%rbp)
	movq	%rdx, -24(%rbp)
	;move string into edi
	movl	$.LC0, %edi
	call	puts
	;x = 42+12
	;add 42 + 12 and put results add with x
	movl	edx, x(%rip)
	movl	x(%rip), %eax
	movl	%eax, %esi
	movl	$.LC1, %edi
	movl	$0, %eax
	call	printf
	nop
	leave
	ret
	.section	.rodata
.LC2:
	.string	"third arg"
.LC3:
	.string	"goodbye"
.LC4:
	.string	"second"
.LC5:
	.string	"goodbye %s %d\n"
.LC6:
	.string	"Hello World!\n"
	.text
	.globl	main
	.type	main, @function
main:
	pushq	%rbp
	movq	%rsp, %rbp
	subq	$16, %rsp
	movl	%edi, -4(%rbp)
	movq	%rsi, -16(%rbp)
	movl	$.LC2, %edx
	movl	$.LC3, %esi
	movl	$42, %edi
	call	func
	movl	x(%rip), %eax
	addl	$48, %eax
	movl	%eax, %edx
	movl	$.LC4, %esi
	movl	$.LC5, %edi
	movl	$0, %eax
	call	printf
	movl	$.LC6, %edi
	call	puts
	movl	$0, %eax
	leave
	ret
